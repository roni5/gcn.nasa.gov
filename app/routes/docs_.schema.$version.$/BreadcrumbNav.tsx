/*!
 * Copyright © 2023 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
} from '@trussworks/react-uswds'

export default function BreadcrumbNav({
  path,
  pathPrepend,
  className,
}: {
  path: string
  pathPrepend?: string
  className?: string
}) {
  const breadcrumbs = path.split('/')
  const lastBreadcrumb = breadcrumbs.pop()

  let cumulativePath = pathPrepend
  return (
    <BreadcrumbBar className={className}>
      <>
        {...breadcrumbs.map((breadcrumb) => {
          cumulativePath = `${cumulativePath}/${breadcrumb}`
          return (
            <Breadcrumb key={cumulativePath}>
              <BreadcrumbLink href={cumulativePath}>
                {breadcrumb}
              </BreadcrumbLink>
            </Breadcrumb>
          )
        })}
      </>
      <Breadcrumb>
        <Breadcrumb current>
          <h2 className="margin-y-0 display-inline">{lastBreadcrumb}</h2>
        </Breadcrumb>
      </Breadcrumb>
    </BreadcrumbBar>
  )
}
