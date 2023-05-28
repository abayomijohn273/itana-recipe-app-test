import React from 'react'
import EmptyRecord from '../../../../components/blocks/emptyRecord'

const EmptyListSection = ({ loading, recipes }) => {
    return (
        <div>
            {recipes?.length === 0 && !loading && <EmptyRecord />}
        </div>
    )
}

export default EmptyListSection