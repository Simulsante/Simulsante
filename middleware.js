import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Protéger uniquement /demo
  if (pathname === '/demo' || pathname === '/demo.html') {
    const token = request.cookies.get('ss_access');
    
    if (!token || token.value !== 'granted') {
      // Pas de cookie valide → redirection vers /acces
      return NextResponse.redirect(new URL('/acces', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/demo', '/demo.html'],
};
