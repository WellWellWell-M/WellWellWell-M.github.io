document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-link');
    const contentSections = document.querySelectorAll('.content-section');
    const scrollContainer = document.querySelector('.scroll-container');
    const homeLink = document.getElementById('home-link');

    // 显示主页
    function showHome() {
        // 移除所有active类
        menuLinks.forEach(link => link.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));
        
        // 显示塞尔达图片
        scrollContainer.style.display = 'flex';
    }

    // 修改菜单点击事件处理
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 隐藏塞尔达图片
            scrollContainer.style.display = 'none';
            
            // 移除所有链接和区块的active类
            menuLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // 为点击的链接添加active类
            link.classList.add('active');
            
            // 显示对应的区块
            const sectionId = link.getAttribute('href').substring(1) + '-section';
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
                // 滚动到页面顶部
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'  // 添加平滑滚动效果
                });
                
                // 如果是The WELL页面，加载内容
                if (sectionId === 'the-well-section') {
                    loadStoryContent();
                }
            }
        });
    });

    // 点击头像/名字返回主页
    homeLink.addEventListener('click', showHome);

    // 初始显示主页
    showHome();
}); 