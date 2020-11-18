const leftToRights = document.querySelectorAll('.left-to-right');
observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `left-to-right 1s forwards ease-out`;
    } else {
        entry.target.style.animation = `none`
    }
    })
})

leftToRights.forEach((leftToRight)=>{
    observer.observe(leftToRight) 
})

const rightToLefts = document.querySelectorAll('.right-to-left');
observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `right-to-left 1s forwards ease-out`;
    } else {
        entry.target.style.animation = `none`
    }
    })
})

rightToLefts.forEach((rightToLeft)=>{
    observer.observe(rightToLeft)
})

const bottomToTops = document.querySelectorAll('.bottom-to-top');
observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0) {
        entry.target.style.animation = `bottom-to-top 1s forwards ease-out`;
    } else {
        entry.target.style.animation = `none`
    }
    })
})

bottomToTops.forEach((bottomToTop)=>{
    observer.observe(bottomToTop)
})

const show = document.querySelectorAll('.show');
observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > 0) {
        entry.target.style.opacity = `1`;
    } else {
        entry.target.style.opacity = `0`
    }
    })
})

show.forEach((item)=>{
    observer.observe(item)
})