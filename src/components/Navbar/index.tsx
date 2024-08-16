'use server'

import Link from 'next/link'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { buttonVariants } from '../ui/button'
import { env } from '@/config/env'

import { MaxWidthWrapper } from '@/components'

export default async function Navbar() {
	const { getUser } = getKindeServerSession()
	const USER = await getUser()
	const isAdmin = USER?.email === env.ADMIN_EMAIL

	return (
		<MaxWidthWrapper>
			<nav className='flex h-14 items-center justify-between border-b border-zinc-200'>
				<Link href='/' className='z-40 flex font-semibold'>
					case<span className='text-purple-600'>cat</span>
				</Link>

				<div className='flex h-full items-center space-x-4'>
					{USER ? (
						<>
							<Link
								href='/api/auth/logout'
								className={buttonVariants({ size: 'sm', variant: 'ghost' })}
							>
								Sign out
							</Link>
							{isAdmin && (
								<Link
									href='/api/auth/logout'
									className={buttonVariants({ size: 'sm', variant: 'ghost' })}
								>
									Dashboard
								</Link>
							)}

							<div className='hidden h-8 w-px bg-zinc-200 sm:block' />

							<Link
								href='/configure/upload'
								className={buttonVariants({
									size: 'sm',
									className: 'hidden items-center gap-1 sm:flex',
								})}
							>
								Create case
								<ArrowRightIcon className='ml-1.5 h-5 w-5' />
							</Link>
						</>
					) : (
						<>
							<Link
								href='/api/auth/register'
								className={buttonVariants({ size: 'sm', variant: 'ghost' })}
							>
								Sign up
							</Link>
							<Link
								href='/api/auth/login'
								className={buttonVariants({ size: 'sm', variant: 'ghost' })}
							>
								Login
							</Link>

							<div className='hidden h-8 w-px bg-zinc-200 sm:block' />

							<Link
								href='/configure/upload'
								className={buttonVariants({
									size: 'sm',
									className: 'hidden items-center gap-1 sm:flex',
								})}
							>
								Create case
								<ArrowRightIcon className='ml-1.5 h-5 w-5' />
							</Link>
						</>
					)}
				</div>
			</nav>
		</MaxWidthWrapper>
	)
}
