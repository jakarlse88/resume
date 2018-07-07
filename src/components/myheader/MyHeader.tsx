import profilePic from  '../../img/profile.jpg';
import './MyHeader.css';

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Grid, Header, Image, List } from 'semantic-ui-react';

const MyHeader = () => {
    return (
        <header className="site-header">
            <Grid centered={true} >
                <Grid.Column width="6" textAlign="left">
                    <Grid.Row>
                        <Link to="/">
                            <Header as="h1">
                                <Image size="massive" circular={true} src={profilePic} alt="Personal picture" />
                                <Header.Content>
                                    {'Jon Karlsen'}
                                    <Header.Subheader>
                                        {'Front-end web developer'}
                                    </Header.Subheader>
                                </Header.Content>
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
        </header>
    );
}

export default MyHeader;