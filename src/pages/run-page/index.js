import {Anchor, Button, Form, Table} from "react-bootstrap";

import {useState} from "react";
import {useParams} from "react-router-dom";

const runs = [
    {"id":1,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"хуй соси","client_environment":"губой тряси","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.05032906084015849}]},
    {"id":2,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"хуй соси","client_environment":"губой тряси","metrics":[{"name":"real_wal_fetch_100_times_avg_time","value":0.05225277017005283}]},
    {"id":3,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"хуй соси","client_environment":"губой тряси","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.04890571376992739}, {"name":"real_wal_fetch_100_times_avg_time","value":0.048893104489943655}]},
    {"id":4,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"хуй соси","client_environment":"губой тряси","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.04920672531985474},{"name":"real_wal_fetch_100_times_avg_time","value":0.04851684263016068}]},
    {"id":5,"os":"Linux x86_64 5.14.21-2-MANJARO","commit_sha":"c105cbe4c69bf67c7a7ca26476cc414daeb23ef4","commit_time":"2022-04-11T12:15:08","client_version":"хуй соси","client_environment":"губой тряси","metrics":[{"name":"random_wal_fetch_100_times_avg_time","value":0.04940601515998424},{"name":"real_wal_fetch_100_times_avg_time","value":0.04904660420004802}]}]

export function RunPage() {
    const { runId } = useParams();
    return (<p>Metrics for runId {runId}</p>)
}