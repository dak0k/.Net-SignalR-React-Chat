import {Button, Heading, Input, Text} from "@chakra-ui/react";
import {useState} from "react";
export const WaitingRoom = ({joinChat}) => {
    const [userName, setUserName] = useState();
    const [chatRoom, setChatRoom] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        joinChat(userName, chatRoom);
    }
    return (
        <form onSubmit={onSubmit} className="max-w-sm w-full bg-white p-8 rounded shadow-lg">
            <Heading>
                Online chat
            </Heading>
            <div className="mb-4">
                <Text fontSize={"sm"}>
                        User name
                </Text>
                <Input onChange={(e) => setUserName(e.target.value)} name="userName" placeholder="Input your name"></Input>
            </div>
            <div className="mb-4">
                <Text fontSize={"sm"}>
                       Chat name
                </Text>
                <Input onChange={(e) => setChatRoom(e.target.value)} name="chatRoom" placeholder="Input chat name"></Input>
            </div>
            <Button type="submit" colorScheme="blue">Join</Button>
        </form>
    );
}