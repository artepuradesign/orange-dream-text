import React from 'react';
import MenuSuperior from '@/components/MenuSuperior';
import PublicPlansSection from '@/components/sections/PublicPlansSection';
import NewFooter from '@/components/NewFooter';
import PageLayout from '@/components/layout/PageLayout';

const PublicPlanos = () => {
  return (
    <PageLayout
      variant="auth"
      backgroundOpacity="strong"
      showGradients={false}
      className="flex flex-col"
    >
      <MenuSuperior />

      <main className="w-full overflow-x-hidden">
        <PublicPlansSection />
      </main>

      <NewFooter />
    </PageLayout>
  );
};

export default PublicPlanos;
