import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Grid, Header, List } from 'semantic-ui-react';
import './MyHeader.css';

const MyHeader = () => {
    return (
        <Grid centered={true} >
            <Grid.Column width="6" textAlign="left">
                <Grid.Row>
                    <Link to="/">
                        <Header as="h1" className="myHeader">
                            Jon Karlsen
                            <Header.Subheader className="mySubheader">
                                Front-End Web Dev
                            </Header.Subheader>
                        </Header>
                    </Link>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column width="6" textAlign="right" verticalAlign="middle">
                <List horizontal={true} link={true}>
                    <List.Item>
                        <NavLink to="/about" className="link" activeClassName="activeLink">About</NavLink>
                    </List.Item>
                    <List.Item>
                        <NavLink to="/projects" className="link" activeClassName="activeLink">Projects</NavLink>
                    </List.Item>
                    <List.Item>
                        <NavLink to="/contact" className="link" activeClassName="activeLink">Contact</NavLink>
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
    );
}

export default MyHeader;