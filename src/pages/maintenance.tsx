import { Box, Container, Grid, Typography } from "@mui/material";
import {Image} from '@nextui-org/react'
import { motion } from "framer-motion";
import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, InferGetServerSidePropsType } from 'next'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import {useRouter} from 'next/router'

import {Link} from '@nextui-org/react'
import {Button} from '@nextui-org/react'

type Props = {}

const MaintenancePage = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter()
  const { t, i18n } = useTranslation(['common'])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const clientSideLanguageChange = (newLocale: string) => {
    i18n.changeLanguage(newLocale);
  }

  const changeTo = router.locale === 'en' ? 'th' : 'en'
  // const changeTo = i18n.resolvedLanguage === 'en' ? 'de' : 'en'

  return (
    <Box
      className="flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(https://cdncf.vtuberhub.in.th/TuuperCoveBanners.png)" }}
    >
      <Container>
        <Grid container spacing={2} className="bg-white/50 backdrop-blur-sm rounded-lg p-4 text-center">
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="https://cdncf.vtuberhub.in.th/tpc512rmbg.png" 
                alt="TuuperCove" 
                width={200} 
                height={200} 
                loading="lazy"
                className="flex justify-center"
              />
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="h1" align="center" color="primary.main">
                {t('maintenance.bigtext')}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="body1" align="center" color="text.secondary">
              {t('maintenance.2nd-text')}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="body1" align="center" color="text.secondary">
                <Link href='/th/maintenance'>
                  <Button>{t('change-locale-th')}</Button>
                </Link>
                <br />
                <br />
                <Link href='/en/maintenance'>
                  <Button>{t('change-locale-en')}</Button>
                </Link>
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default MaintenancePage;
