import { Card, Space } from "antd";import { InstadataResponse } from "../../shared/models/instadata-response";
import { getInstaData } from "../../../services/social-network";
import { useEffect, useState } from "react";
import "./Dashboard.scss";


export const Dashboard = () => {
	const [instadata, setInstadata] = useState<InstadataResponse | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getInstaData();
			setInstadata(result);
		};

		fetchData();
	}, []);

	return (
		<div className="dashboard">
			<h1>Dashboard</h1>

			<Card
				title="Instagram"
				bordered={false}
				style={{ width: "auto" }}
				loading={instadata ? false : true}
			>
				<Space direction="horizontal" size={16}>
					<Card title="Seguidores" bordered={false} className="dashboard__card">
						<b>{instadata?.followers}</b>
					</Card>
					<Card title="Seguindo" bordered={false} className="dashboard__card">
						<b>{instadata?.followees}</b>
					</Card>
				</Space>
			</Card>
		</div>
	);
};
