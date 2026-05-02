interface IPageData {
  latitude: number;
  longitude: number;
  randomImages: string[];
  heroImages: string[];
}

interface LocationResult {
  latitude: number;
  longitude: number;
}

Page<IPageData>({
  data: {
    latitude: 23.1323,
    longitude: 113.3308,
    randomImages: [],
    heroImages: []
  },
  onLoad() {
    this.getLocation();
    this.loadRandomImages();
    this.loadHeroImages();
  },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res: LocationResult) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
      fail: () => {
        // 使用默认位置：广州市天河体育中心
      }
    });
  },
  loadRandomImages() {
    // 使用时间戳确保每次刷新都是不同的随机图片
    const timestamp = Date.now();
    const images = [
      `https://picsum.photos/400/300?random=${timestamp + 1}`,
      `https://picsum.photos/400/300?random=${timestamp + 2}`,
      `https://picsum.photos/400/300?random=${timestamp + 3}`,
      `https://picsum.photos/400/300?random=${timestamp + 4}`,
      `https://picsum.photos/400/300?random=${timestamp + 5}`,
      `https://picsum.photos/400/300?random=${timestamp + 6}`
    ];
    this.setData({
      randomImages: images
    });
  },
  loadHeroImages() {
    const heroImages = [
      'https://images.unsplash.com/photo-1445251836269-d158eaa028a6?w=750',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=750',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=750',
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=750'
    ];
    this.setData({
      heroImages: heroImages
    });
  },
  onReady() {
    // Page ready lifecycle
  }
})