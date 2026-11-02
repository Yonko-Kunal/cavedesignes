import DesignsGallery from "@/Components/designsGallery";
import Container from "@/Components/container";
export default function Home() {
	return (
		<div className="border-t border-b border-border">
			<Container className="border-l border-r border-border">
				<DesignsGallery />
			</Container>
		</div>
	);
}
