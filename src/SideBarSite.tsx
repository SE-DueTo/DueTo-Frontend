import { Box } from "@mui/system"
import OverviewElement from "./OverviewElement"
import { Group, GroupType, User } from "./Types"

type SideBarSiteProps = {
    children: JSX.Element
}
const SideBarSite:React.FC<SideBarSiteProps> = ({children}:SideBarSiteProps) => {
    const user:User = {
        userId: 0,
        username: "Username",
        email: "user@example.com",
        avatar_url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Hauskatze_langhaar.jpg"
    }
    const user2:User = {
        userId: 1,
        username: "Username2",
        email: "user2@example.com",
        avatar_url: null
    }

    const groups:Group[] = [
        {
            groupId: 0,
            groupname: "Test_0",
            type: GroupType.NORMAL,
            users: [user]
        }, {
            groupId: 1,
            groupname: "Bla",
            type: GroupType.SPONTANEOUS,
            users: [user, user2]
        }, 
    ]

    return (
        <Box 
            sx={{
                display: "grid", 
                gridTemplateColumns: "auto 1fr",
            }}
        >
            <OverviewElement user={user} groups={groups}/>
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export default SideBarSite