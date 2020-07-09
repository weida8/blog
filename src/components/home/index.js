import React, {useEffect, useState} from 'react'
import ContentLayout from '../ContentLayout'
import { getBlogs } from '../../api/blog'
import BasicCard from '../../uiComponents/Card'
import photoSearch from '../../api/genericPhotoSearch'

const Home = () => {
    const [blogs, setBlogs] = useState()
    const [locationPhotoSearch, setLocationPhotoSearch] = useState()

    useEffect(() => {
        getBlogs()
            .then(res => {
                setBlogs(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
        // photoSearch('enchanted rock')
        //     .then(response => {
        //         console.log(response.data)
        //         setLocationPhotoSearch(response.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }, [])
    return(
        <ContentLayout>
            {console.log(locationPhotoSearch)}
            {blogs && blogs.map((blog)=> 
                <div style={{padding: '1% 0'}}>
                    <BasicCard blog={blog} />
                </div>
            )}
        </ContentLayout>
    )
}

export default Home;