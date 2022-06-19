import React, { memo } from 'react'

const Footer = memo((props) => {
    const { setStatusFilter, activeButton, clearCompleted, numOfTodosLeft, numOfTodos } = props

    const menuItem = [
        {href: '#/', title: 'ALL', key: '1'},
        {href: '#/active', title: 'ACTIVE', key: '2'},
        {href: '#/completed', title: 'COMPLETED', key: '3'},
      ];
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft > 1 ? 'items' : 'item'}</span>
                <span> left</span>
            </span>
            <ul className="filters">

                {menuItem.map(value => {
                  return (
                    <li key={value.key}>
                        <a
                            href={value.href}
                            className={`${activeButton === value.title ? "selected" : ''}`}
                            onClick={() => setStatusFilter(value.title)}
                        >
                            {value.title}
                        </a>
                </li>
                  );
                })}
                
                {/* <span></span>
                <li>
                    <a
                        href="#/active"
                        className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ACTIVE')}
                    >
                        Active
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/completed"
                        className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('COMPLETED')}
                    >
                        Completed
                    </a>
                </li> */}
            </ul>
            {
                numOfTodosLeft < numOfTodos && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
            }
        </footer>
    )
})

export default Footer