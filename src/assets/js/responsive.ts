import {store} from '@/vuex/store'
import {ref} from "vue";

export const setResponsiveLayout = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1200) {
        store.commit('responsiveLayout', 'default')
    } else if (innerWidth >= 992) {
        store.commit('responsiveLayout', 'md')
    } else if (innerWidth >= 768) {
        store.commit('responsiveLayout', 'sm')
    } else {
        store.commit('responsiveLayout', 'xs')
    }
    window.removeEventListener('resize', () => {
    })
}

export const responsive = () => {
    window.addEventListener('resize', () => {
        setResponsiveLayout();
    })
}

export const carouselHeight = ref()
export const carouselWidth = ref()

export const setPortalCarouselResponsive = () => {
    switch (store.state.responsiveLayout) {
        case 'default':
            carouselWidth.value = window.innerWidth*0.9;
            carouselHeight.value = carouselWidth.value*9/16;
            break
        case 'md':
            carouselWidth.value = window.innerWidth*0.9;
            carouselHeight.value = carouselWidth.value*9/16;
            break
        case 'sm':
            carouselWidth.value = window.innerWidth*0.9;
            carouselHeight.value = carouselWidth.value*9/16;
            break
        case 'xs':
            carouselWidth.value = window.innerWidth*0.9;
            carouselHeight.value = carouselWidth.value*9/16;
            break
    }
}

export const imageHeight = ref()
export const imageWidth = ref()

export const setPortalImageResponsive = () => {
    switch (store.state.responsiveLayout) {
        case 'default':
            imageWidth.value = window.innerWidth*0.45 - 20;
            imageHeight.value = imageHeight.value*9/16;
            break
        case 'md':
            imageWidth.value = window.innerWidth*0.45 - 20;
            imageHeight.value = imageHeight.value*9/16;
            break
        case 'sm':
            imageWidth.value = window.innerWidth*0.45 - 20;
            imageHeight.value = imageHeight.value*9/16;
            break
        case 'xs':
            imageWidth.value = window.innerWidth*0.9;
            imageHeight.value = imageHeight.value*9/16;
            break
    }
}
