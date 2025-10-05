// composables/useDragToScroll.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useDragToScroll(el) {
    const isDown = ref(false);
    const startX = ref(0);
    const scrollLeft = ref(0);

    const mouseDownHandler = (e) => {
        if (!el.value) return;
        isDown.value = true;
        el.value.classList.add('active');
        startX.value = e.pageX - el.value.offsetLeft;
        scrollLeft.value = el.value.scrollLeft;
    };

    const mouseLeaveHandler = () => {
        if (!el.value) return;
        isDown.value = false;
        el.value.classList.remove('active');
    };

    const mouseUpHandler = () => {
        if (!el.value) return;
        isDown.value = false;
        el.value.classList.remove('active');
    };

    const mouseMoveHandler = (e) => {
        if (!isDown.value || !el.value) return;
        e.preventDefault();
        const x = e.pageX - el.value.offsetLeft;
        const walk = (x - startX.value) * 2; // the *2 makes it scroll faster
        el.value.scrollLeft = scrollLeft.value - walk;
    };

    onMounted(() => {
        if (!el.value) return;
        el.value.addEventListener('mousedown', mouseDownHandler);
        el.value.addEventListener('mouseleave', mouseLeaveHandler);
        el.value.addEventListener('mouseup', mouseUpHandler);
        el.value.addEventListener('mousemove', mouseMoveHandler);
    });

    onUnmounted(() => {
        if (!el.value) return;
        el.value.removeEventListener('mousedown', mouseDownHandler);
        el.value.removeEventListener('mouseleave', mouseLeaveHandler);
        el.value.removeEventListener('mouseup', mouseUpHandler);
        el.value.removeEventListener('mousemove', mouseMoveHandler);
    });
}