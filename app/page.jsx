import Feed from '@components/Feed'

const Home = () => (
    <section className='w-full flex-center flex-col'>
        
        <h1 className='head_text blue_gradient text-center'>
            ค้นพบ & แชร์
            <br className='max-md:hidden' />
            <span className='blue_gradient text-center'> AI-ขับเคลื่อน พร้อม</span>
        </h1>


        <p className='desc text-center'>
            พร้อม AI คือแหล่งข้อมูลของการสร้าง พร้อม เพื่อใช้ใน AI
        </p>
        <Feed />
    </section>
    
);

export default Home;
