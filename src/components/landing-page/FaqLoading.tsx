// src/components/FaqLoading.tsx

export function FaqLoading() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
      <p className="mt-8 text-sm text-gray-500">Carregando Perguntas Frequentes...</p>
    </div>
  );
}