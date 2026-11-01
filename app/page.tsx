import DesignsGallery from "@/Components/designsGallery";
import Container from "@/Components/container";
export default function Home() {
	return (
		<div className="border-t border-b border-gray-200">
			<Container className="border-l border-r border-gray-200">
				<DesignsGallery />
			</Container>
		</div>
	);
}
