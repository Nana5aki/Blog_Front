/*
 * @Author: lvxr
 * @LastEditTime: 2024-08-01 00:02:09
 */

import { useLinkList } from "./config"
import {NavLink} from 'react-router-dom'

export default function Nav() {

  const { navArr } = useLinkList();

  return (
    <>
      <nav>
        <div>
          { navArr.map((item,index)=>(
            <NavLink
              to = {item.to}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}