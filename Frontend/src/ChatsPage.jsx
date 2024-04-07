import { PrettyChatWindow } from "react-chat-engine-pretty"

const chatsPage = (props) => {
    return ( 
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId="95fd7823-1c71-48e6-985f-63d7258d326b"
                username={ props.user.username }
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}
export default chatsPage