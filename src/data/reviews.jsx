const reviews = [
    {
        id: 1,
        review: `"I landed my dream job in 3 weeks. the search filters saved me hours of wasted time"`,
        image: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg",
        name: "Marcus Chen",
        position: "Senior Engineer, Google"
    },
    {
        id: 2,
        review: `"Fresh positions every day from companies I actually wanted to work for. No noise, just signal"`,
        image: "https://cdn.pixabay.com/photo/2022/09/12/17/39/woman-7450034_1280.jpg",
        name: "Sarah Williams",
        position: "Backend Developer, Stripe"
    },
    {
        id: 3,
        review: `"The curation here is different. They only show jobs worth your time, not everything under the sun"`,
        image: "https://cdn.pixabay.com/photo/2019/12/20/01/11/headshot-4707400_1280.jpg",
        name: "James Rodriguez",
        position: "Full Stack Engineer, Airbnb"
    },

]

export function getReviews(){
    return reviews
}