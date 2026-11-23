const galleryImages = [
  { id: 'g3', src: '/assets/g3.jpg', alt: 'Blue Werner & Sons drilling truck and rig at a residential property', className: 'wide', category: 'Equipment & Fleet' },
  { id: 'g9', src: '/assets/g9.jpg', alt: 'Red drilling truck beneath a tall rig among trees', className: 'tall', category: 'Equipment & Fleet' },
  { id: 'g2', src: '/assets/g2.jpg', alt: 'Red cable tool drilling truck set up at a wooded site', className: 'tall', category: 'Equipment & Fleet' },
  { id: 'g4', src: '/assets/g4.jpg', alt: 'Red International drilling truck with its rig equipment', className: '', category: 'Equipment & Fleet' },
  { id: 'g10', src: '/assets/g10.jpg', alt: 'Two cable tool rigs set up on open properties', className: '', category: 'Equipment & Fleet' },
  { id: 'g5', src: '/assets/g5.jpg', alt: 'Red and blue Werner & Sons drilling trucks parked side by side', className: 'wide', category: 'Equipment & Fleet' },
  { id: 'drilling', src: '/assets/drilling.jpg', alt: 'Blue drilling truck with a raised rig at an open job site', className: 'tall', category: 'Equipment & Fleet' },
  { id: 'g7', src: '/assets/g7.jpg', alt: 'Blue cable tool drilling truck and rig beside a building', className: '', category: 'Equipment & Fleet' },
  { id: 'g1', src: '/assets/g1.jpg', alt: 'Blue Werner & Sons drilling truck parked at a home', className: 'tall', category: 'Equipment & Fleet' },
  { id: 'g6', src: '/assets/g6.jpg', alt: 'Blue and red drilling trucks at a work site', className: '', category: 'Equipment & Fleet' },
  { id: 'g11', src: '/assets/g11.jpg', alt: 'Blue drilling truck and rig at a residential well-deepening site', className: 'tall', category: 'Well Deepening' },
  { id: 'g8', src: '/assets/g8.jpg', alt: 'Drilling trucks and rig at a site with a worker nearby', className: 'wide', category: 'Equipment & Fleet' },
  { id: 'about', src: '/assets/about.jpg', alt: 'Drilling equipment at a tree-lined property', className: '', category: 'Equipment & Fleet' },
  { id: 'deepening', src: '/assets/deepening.jpg', alt: 'Blue Werner & Sons service truck parked on gravel', className: '', category: null },
  { id: 'treatment', src: '/assets/treatment.jpg', alt: 'Dark cylindrical water-system equipment outdoors', className: '', category: null },
];

const homeGalleryOrder = ['g3', 'g9', 'g4', 'g10', 'g6', 'drilling', 'g8', 'g5', 'g2'];

export const homeGalleryImages = homeGalleryOrder.map((id) => galleryImages.find((image) => image.id === id));

export default galleryImages;
