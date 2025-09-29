
        const btn = document.getElementById('dropdownBtn');
        const menu = document.getElementById('dropdownMenu');

        // 버튼 클릭 시 메뉴 토글
        btn.addEventListener('click', function(event) {
        event.stopPropagation(); // 다른 클릭 이벤트 방지
        menu.classList.toggle('show');
        });

        // 외부 클릭 시 메뉴 닫기
        document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !btn.contains(event.target)) {
            menu.classList.remove('show');
        }
        });
