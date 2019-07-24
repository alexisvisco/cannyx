import {Heading, HeadingLevel} from "baseui/heading";
import * as React from "react";
import {Card} from "baseui/card";
import {UpVote} from "../components/upvote/UpVote";
import {StatefulTabs, Tab} from "baseui/tabs";
import {Textarea} from "baseui/textarea";
import {Button, SIZE} from "baseui/button";

export const Post = () => {
    return <div className="container">
        <HeadingLevel>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Heading styleLevel={4}>Post description</Heading>
            </div>

            <Card>
                <div style={{display: 'flex'}}>
                    <UpVote vote={32} voted={true}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Heading styleLevel={6}>Feature upvote</Heading>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam autem dolore
                            excepturi, exercitationem, incidunt iure magni minus molestiae neque numquam odit provident
                            quasi quisquam reiciendis sed sequi suscipit unde?</p>
                    </div>
                </div>

                <br/>

                <StatefulTabs initialState={{activeKey: '0'}}
                              overrides={{TabBar: {style: {backgroundColor: "white"}}}}>
                    <Tab title="Public">Blabla</Tab>
                    <Tab title="Internal">Blabla 2</Tab>
                </StatefulTabs>

                <br/>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Textarea
                        placeholder="Comment"
                    />
                    <br/>
                    <div style={{marginLeft: 'auto'}}>
                        <Button size={SIZE.compact}>Add comment</Button>
                    </div>
                </div>
            </Card>

        </HeadingLevel>
    </div>
}