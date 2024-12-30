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

    // 处理菜单点击
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 隐藏塞尔达图片
            scrollContainer.style.display = 'none';
            
            // 移除所有active类
            menuLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // 为点击的链接添加active类
            link.classList.add('active');
            
            // 显示对应的内容区域并启动轮播
            const sectionId = link.getAttribute('href').substring(1) + '-section';
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('active');
                // 找到该section中的slider并重置播放
                const slider = section.querySelector('.slider-container');
                if (slider && slider.sliderInstance) {
                    slider.sliderInstance.resetAndPlay();
                }
            }
        });
    });

    // 点击头像/名字返回主页
    homeLink.addEventListener('click', showHome);

    // 初始显示主页
    showHome();
}); 