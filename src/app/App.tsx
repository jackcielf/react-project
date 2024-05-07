import Sidebar from "./shared/components/sidebar/Sidebar";
import AppRouting from "./AppRouting";
import { Layout } from "antd";
import React from "react";
import "./App.scss";

const { Content } = Layout;

const App: React.FC = () => {
	return (
		<Layout className="app">
			<Sidebar />
			<Layout>
				<Content className="app__content">
					<AppRouting />
				</Content>
			</Layout>
		</Layout>
	);
};

export default App;