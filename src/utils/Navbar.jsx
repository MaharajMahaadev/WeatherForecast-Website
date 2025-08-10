import Search from './Search'

export default function Navbar({ useCoord, usePlace }){
    return(
        <nav class="navbar">
            <div class="navbar-content">
                <div class="navbar-brand">Weather</div>
                <div class="search-container">
                    <div class="search-box">
                        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>
                        <Search useCoord={useCoord} usePlace={usePlace} />
                    </div>
                </div>
                <div class="navbar-spacer"></div>
            </div>
        </nav>
    )
}