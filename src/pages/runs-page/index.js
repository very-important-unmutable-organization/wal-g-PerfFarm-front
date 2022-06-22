import {Anchor, Table} from "react-bootstrap";
import dateFormat, { masks } from "dateformat";

const runs = [
    {"id":1,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_repo": "https://github.com/wal-g/wal-g","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"v1","client_environment":"environment","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.05032906084015849}]},
    {"id":2,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_repo": "https://github.com/wal-g/wal-g","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"v1","client_environment":"environment","metrics":[{"name":"real_wal_fetch_100_times_avg_time","value":0.05225277017005283}]},
    {"id":3,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_repo": "https://github.com/wal-g/wal-g","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"v1","client_environment":"environment","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.04890571376992739}, {"name":"real_wal_fetch_100_times_avg_time","value":0.048893104489943655}]},
    {"id":4,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_repo": "https://github.com/wal-g/wal-g","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"v1","client_environment":"environment","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.04920672531985474},{"name":"real_wal_fetch_100_times_avg_time","value":0.04851684263016068}]},
    {"id":5,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_repo": "https://github.com/wal-g/wal-g","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"v1","client_environment":"environment","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.04940601515998424},{"name":"real_wal_fetch_100_times_avg_time","value":0.04904660420004802}]}]

const tableColumnHeaders = ['#', "OS", "Commit Repo", "Commit Sha", "Date", "Client Version", "Client Environment"]

export function RunsPage() {
    return (
        <>
        <div className={'md-1'}>
            <h2>Performance Test Runs</h2>
        </div>
        <Table bordered hover>
            <thead>
                {tableColumnHeaders.map(title => <th>{title}</th>)}
            </thead>
            <tbody>
            {runs.map(run =>
                <tr>
                    <td><Anchor href={`/runs/${run.id}`}>{run.id}</Anchor></td>
                    <td>{run.os}</td>
                    <td><Anchor href={run.commit_repo}>{run.commit_repo}</Anchor></td>
                    <td><Anchor href={run.commit_repo+ '/commit/' + run.commit_sha}>{run.commit_sha}</Anchor></td>
                    <td>{dateFormat(run.commit_time)}</td>
                    <td>{run.client_version}</td>
                    <td>{run.client_environment}</td>
                </tr>
            )}
            </tbody>
        </Table>
    </>
    )
}