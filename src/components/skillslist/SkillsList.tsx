import * as React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';

const SkillsList = () => {
    return (
        <Grid container={true} textAlign="center" divided="vertically" verticalAlign="middle">
			<Grid.Row columns="1">
				<Grid.Column>
					<Header as="h1">Jon Karlsen</Header>
					<p>Front-End Web Dev</p>
				</Grid.Column>
				<Grid.Column>
					<List>
						<List.Item>
							<List.Icon name="folder open" />
							<List.Content>
								<List.Header>skills</List.Header>
							</List.Content>
							<List.List>
								<List.Item>
									<List.Icon name="file outline" />
									<List.Content>HTML5</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="file outline" />
									<List.Content>CSS/SASS</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="file outline" />
									<List.Content>JavaScript/ES6</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="file outline" />
									<List.Content>TypeScript</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name="folder open" />
									<List.Content>
										<List.Header>tools</List.Header>
									</List.Content>
									<List.List>
										<List.Item>
											<List.Icon name="file outline" />
											<List.Content>Gulp</List.Content>
										</List.Item>
										<List.Item>
											<List.Icon name="file outline" />
											<List.Content>WebPack</List.Content>
										</List.Item>
									</List.List>
								</List.Item>
							</List.List>
						</List.Item>
					</List>
				</Grid.Column>
			</Grid.Row>
		</Grid>
    );
}

export default SkillsList;