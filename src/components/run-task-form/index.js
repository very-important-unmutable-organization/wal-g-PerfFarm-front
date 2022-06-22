import {Form, Button} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {getAgents} from "../../api/requests";

import './run-task-form.css';
import {UserContext} from "../utils/userContext";

export function RunTaskForm() {
    const [gitRepo, setGitRepo] = useState('https://github.com/wal-g/wal-g');
    const [gitCommitSha, setGitCommitSha] = useState('');
    const [agent, setAgent] = useState('');
    const [agents, setAgents] = useState([]);

    const { user } = useContext(UserContext)

    useEffect(() => {
        setAgents(getAgents());
    }, [])

    const handleGitRepoChange = e => {
        setGitRepo(e.target.value)
    }
    const handleGitCommitShaChange = e => {
        setGitCommitSha(e.target.value)
    }
    const handleAgentChange = e => {
        setAgent(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            alert('Please log in first');
            return;
        }
        if (!(gitRepo && gitCommitSha && agent)) return;
        console.log(gitRepo, gitCommitSha, agent);
    }


    return (
        <Form className={'run-task-form'}>
            <Form.Group className="mb-3">
                <Form.Label>git repo</Form.Label>
                <Form.Control name="git-repo" title="git-repo" type="text" value={gitRepo} onChange={handleGitRepoChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>git commit sha</Form.Label>
                <Form.Control name="git-commit-sha" title="git-commit-sha" type="text" value={gitCommitSha} onChange={handleGitCommitShaChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>agent</Form.Label>
                <Form.Select name="agent" value={agent} onChange={handleAgentChange}>
                    {agents.map(agent => (
                        <option value={agent} key={agent}>{agent}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Button
                className={'mb-3 submit-button'}
                onClick={onSubmit}
                variant="primary"
                type="submit"
            >
                run task
            </Button>
        </Form>
    )
}