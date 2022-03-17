import {DownhillSkiing, ShoppingCart} from "@mui/icons-material";
import {Badge} from "@mui/material";

const {AppBar, Toolbar, IconButton, Typography} = require("@mui/material");


function Header({handleCart, orderLen}) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="span" sx={{flexGrow: 1}}>W I N T E R ' s <DownhillSkiing/> T A L E</Typography>
                <IconButton color="inherit" onClick={handleCart}>
                    <Badge
                        color="secondary"
                        badgeContent={orderLen}
                    >
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header