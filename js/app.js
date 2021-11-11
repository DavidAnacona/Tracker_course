new Vue({

    el: '#app',

    data() {
        return {
            courses: [],
            hour: '',
            course: '',
            error: false
        }
    },

    computed: {
        totalTime() {
            if (this.courses.lenght === 0) return 0 
            let timeTotal = 0
            this.courses.map((i) => {
                timeTotal += i.time 
            })
            return timeTotal
        }
    },

    methods:  {
        addListCourse() {
            if (this.course === '' && this.hour === '') {
                return this.error = true
            } 
            error = false
            let addCourse = { title: this.course, time: parseInt(this.hour) }
            this.courses.push(addCourse)
            this.course = ''
            this.hour = ''
            
        }
    }
})