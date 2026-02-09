import { Suspense } from 'react';
import RedirectLogic from './RedirectLogic';

// We wrap the logic in a Suspense boundary because access to searchParams might suspend
// or we want to ensure client-side hydration for reading query params cleanly.
export default function TesteWhatsappPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <RedirectLogic />
    </Suspense>
  );
}
