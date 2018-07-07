import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, List } from 'semantic-ui-react';

const MyHeader = () => {
    return (
        <Grid centered={true} container={true}>
            <Grid.Column width="4">
                <Grid.Row>
                    <Link to="/">
                        <Header as="h1">
                            Jon Karlsen
                            <Header.Subheader>
                                Front-End Web Dev
                            </Header.Subheader>
                        </Header>
                    </Link>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width="12" textAlign="right" verticalAlign="middle">
                <List horizontal={true} link={true}>
                    <List.Item>
                        <Link to="/about">About</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/projects">Projects</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/contact">Contact</Link>
                        
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
    );
}

export default MyHeader;