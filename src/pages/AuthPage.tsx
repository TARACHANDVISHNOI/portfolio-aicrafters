
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Auth from '@/components/Auth';
import { supabase } from '@/integrations/supabase/client';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate('/');
      }
    };

    checkUser();
  }, [navigate]);

  return (
    <Layout>
      <Auth />
    </Layout>
  );
};

export default AuthPage;
