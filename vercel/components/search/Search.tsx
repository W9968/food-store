import { FC } from 'react'
import Link from 'next/link'
import { SearchField, SearchIcon, Text } from 'styles/Search.module'

const Search: FC = () => {
  return (
    <Link href={'/search'} passHref>
      <SearchField>
        <Text>search</Text>
        <SearchIcon />
      </SearchField>
    </Link>
  )
}

export default Search
