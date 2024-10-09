import cn from 'classnames';

export default function Stepper({ completedCount, totalCount }) {
    const range = new Array(totalCount).fill(0);

    return (
        <div className="stepper">
            <ul className="stepper__list">
                {range.map((_, index) => 
                    <li className={cn('stepper__item', {
                        'stepper__item--completed': index + 1 <= completedCount
                    })} />
                )}
            </ul>
        </div>
    );
}