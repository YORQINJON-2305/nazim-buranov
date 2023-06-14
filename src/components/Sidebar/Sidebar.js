import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { GiHamburgerMenu } from "react-icons/gi";

export const Sidebar = () => {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role='presentation'
		>
			<List>
				<h1>Yorqinjon</h1>
				<button onClick={toggleDrawer(anchor, false)}>Close</button>
			</List>
			<Divider />
		</Box>
	);

	return (
		<div>
			{["left"].map((anchor) => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>
						<GiHamburgerMenu />
					</Button>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
};
