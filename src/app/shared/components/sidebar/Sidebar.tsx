import { StockOutlined, FileUnknownOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		label,
		key,
		icon,
		children,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Dashboard", "dashboard", <StockOutlined />),
	getItem("Documents", "docs", <FileUnknownOutlined />),
];

export default function Sidebar() {
  const navegate = useNavigate();
	const [collapsed, setCollapsed] = useState(true);
  
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
        items={items}
        defaultSelectedKeys={["dashboard"]}
        mode="inline"
        theme="dark"
        onClick={({key}) => navegate(key)}
      />
		</Sider>
  )
}