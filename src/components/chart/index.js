import React, {useState} from 'react';
import {LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis} from 'recharts';
import {getMetricByName, getMetricNames} from "../../api/requests";
import dateFormat from "dateformat";


const data = [
    {
        "name": "random_wal_fetch_100_times_avg_mem_kb",
        "value": 55885.16,
        "repo": "https://github.com/wal-g/wal-g",
        "run": {
            "id": 1,
            "os": "Linux x86_64 5.14.21-2-MANJARO",
            "commit_sha": "c105cbe4c69bf67c7a7ca26476cc414daeb23ef4",
            "commit_time": "2022-04-11T12:15:08",
            "client_version": "хуй соси",
            "client_environment": "губой тряси"
        }
    },
    {
        "name": "random_wal_fetch_100_times_avg_mem_kb",
        "value": 56390.4,
        "repo": "https://github.com/wal-g/wal-g",
        "run": {
            "id": 2,
            "os": "Linux x86_64 5.4.0-107-generic",
            "commit_sha": "c105cbe4c69bf67c7a7ca26476cc414daeb23ef4",
            "commit_time": "2022-04-11T12:15:08",
            "client_version": "хуй соси",
            "client_environment": "губой тряси"
        }
    },
    {
        "name": "random_wal_fetch_100_times_avg_mem_kb",
        "value": 56118.44,
        "repo": "https://github.com/wal-g/wal-g",
        "run": {
            "id": 3,
            "os": "Linux x86_64 5.4.0-107-generic",
            "commit_sha": "c105cbe4c69bf67c7a7ca26476cc414daeb23ef4",
            "commit_time": "2022-04-11T12:15:08",
            "client_version": "хуй соси",
            "client_environment": "губой тряси"
        }
    },
    {
        "name": "random_wal_fetch_100_times_avg_mem_kb",
        "value": 56347.76,
        "repo": "https://github.com/wal-g/wal-g",
        "run": {
            "id": 4,
            "os": "Linux x86_64 5.4.0-107-generic",
            "commit_sha": "c105cbe4c69bf67c7a7ca26476cc414daeb23ef4",
            "commit_time": "2022-04-11T12:15:08",
            "client_version": "хуй соси",
            "client_environment": "губой тряси"
        }
    },
    {
        "name": "random_wal_fetch_100_times_avg_mem_kb",
        "value": 56097.2,
        "repo": "https://github.com/wal-g/wal-g",
        "run": {
            "id": 5,
            "os": "Linux x86_64 5.4.0-107-generic",
            "commit_sha": "c105cbe4c69bf67c7a7ca26476cc414daeb23ef4",
            "commit_time": "2022-04-11T12:15:08",
            "client_version": "хуй соси",
            "client_environment": "губой тряси"
        }
    },
    {
        "name": "random_wal_fetch_100_times_avg_mem_kb",
        "value": 56151.28,
        "repo": "https://github.com/wal-g/wal-g",
        "run": {
            "id": 6,
            "os": "Linux x86_64 5.4.0-107-generic",
            "commit_sha": "c105cbe4c69bf67c7a7ca26476cc414daeb23ef4",
            "commit_time": "2022-04-11T12:15:08",
            "client_version": "хуй соси",
            "client_environment": "губой тряси"
        }
    }
]

export class Chart extends React.Component {
    state = {
        chartData: [],
        metrics: [],
        current_metric: "",
    };

    formatData(data) {
        data = data.sort((f, s) => Date.parse(f.run.commit_time) - Date.parse(s.run.commit_time));
        for (const metric_info of data) {
            metric_info.run.commit_time = dateFormat(metric_info.run.commit_time, "d-mm-yyyy hh:MM:ss");
        }
        return data;
    }

    async changeMetric(event) {
        const current_metric = event.target.value;
        console.log(current_metric);
        const state = await this.getNewState(current_metric);

        this.setState({current_metric: current_metric, ...state});
    }

    async getNewState(current_metric) {
        console.log(current_metric);
        const res = await getMetricByName(current_metric);
        return {
            chartData: this.formatData(res),
        }
    }

    componentDidMount() {
        getMetricNames()
            .then(metrics => {
                this.setState({ metrics: metrics, current_metric: metrics[0]});
            });
        const fetchData = async () => {
            const all_metrics = await getMetricNames();
            const current_metric = all_metrics[0];
            this.setState(
                {
                    metrics: all_metrics,
                    current_metric: current_metric,
                }
            )
            await this.changeMetric({target: {value: this.state.current_metric}});
        };
        fetchData();
    }

    render() {
        const { chartData } = this.state;
        console.log("RENDER");
        console.log(this.state);
        const handleMetricChange = async (event) => {
            await this.changeMetric(event);
        }

        // const groupedByRepo = chartData.reduce((group, obj) => {
        //     const { repo } = obj;
        //     group[repo] = group[repo] ?? [];
        //     group[repo].push(obj);
        //     return group;
        // }, {});
        // console.log(groupedByRepo);
        //
        // const lines = []
        // let i = 0
        // for (const [repo, data_items] of Object.entries(groupedByRepo)) {
        //     lines.push(<Line type="monotone" data={data_items} dataKey="run.commit_sha" stroke="#ff7300" yAxisId={i} />);
        //     lines.push(<Line type="monotone" data={data_items} dataKey="value" stroke="#ff7300" yAxisId={i} />);
        //     lines.push(<Line type="monotone" data={data_items} dataKey="name" stroke="#ff7300" yAxisId={i} />);
        //     lines.push(<Line type="monotone" data={data_items} dataKey="repo" stroke="#ff7300" yAxisId={i} />);
        //     lines.push(<Line type="monotone" data={data_items} dataKey="run.os" stroke="#ff7300" yAxisId={i} />);
        // }
        return (
            <div>
            <form>
                <label htmlFor="metrics">Metric</label>
                <p></p>
                <select onChange={handleMetricChange}>
                    {
                        this.state.metrics.map(metric =>
                            <option value={metric}>{metric}</option>
                        )}
                    </select>
                </form>
        <LineChart
                    width={1100}
                    height={400}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        data={chartData}>
                    <XAxis dataKey="run.commit_time"/>
                    <YAxis dataKey="value"/>
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
            {/*{*/}
            {/*    lines.map(l => l)*/}
            {/*}*/}
                <Line type="monotone" dataKey="run.commit_sha" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="name" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="repo" stroke="#ff7300" yAxisId={0} />
                <Line type="monotone" dataKey="run.os" stroke="#ff7300" yAxisId={0} />

                </LineChart>
            </div>
        );
    }
}