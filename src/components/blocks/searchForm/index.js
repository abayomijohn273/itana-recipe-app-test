import React from 'react'

const SearchForm = () => {
    return (
        <form>
            <label for="default-search" class="mb-2 text-sm font-medium text-textColor sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-full px-4 py-4 lg:py-5 pl-10 text-sm text-textColor placeholder:text-textColor border border-secondary rounded-2xl bg-white focus:ring-secondary focus:outline-none" placeholder="Search for recipes by ingredients..." required />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-secondary focus:outline-none font-medium rounded-lg text-sm px-4 py-2 lg:py-3">Search</button>
            </div>
        </form>
    )
}

export default SearchForm