import React, { useEffect } from "react"
import "./Banner.css"
import axios from "./axios"
import requests from "./Requests"
function Banner() {
	const [movie, setMovie] = React.useState([])

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals)
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			)
			return request
		}
		fetchData()
	}, [])
	function truncate(string, n) {
		return string?.length > n ? string.substring(0, n - 1) + "..." : string
	}

	return (
		<header
			className="banner"
			style={{
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}
		>
			<div className="banner_contents">
				<h1 className="banner_title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
				<div className="banner_buttons">
					<a href="https://www.youtube.com/c/NetflixIndiaOfficial">
						<button className="banner_button play">
							{" "}
							<i class="fa-solid fa-play icon"></i>Play
						</button>
					</a>
					<button className="banner_button">
						<i class="fa-solid fa-plus icon"></i>My List
					</button>
				</div>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	)
}

export default Banner
