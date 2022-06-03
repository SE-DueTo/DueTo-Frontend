import { Box } from "@mui/system"
import DashboardDataProvider from "./context/DashboardDataProvider"
import OverviewElement from "./OverviewElement"

type SideBarSiteProps = {
    children: JSX.Element
}
function SideBarSite({children}:SideBarSiteProps) {

    return (
        <DashboardDataProvider>
            <Box 
                sx={{
                    display: "grid", 
                    gridTemplateColumns: "auto 1fr",
                }}
            >
                <OverviewElement/>
                <Box>
                    {children}
                </Box>
            </Box>
        </DashboardDataProvider>
    )
}

export default SideBarSite