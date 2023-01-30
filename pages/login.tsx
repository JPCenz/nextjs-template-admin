import Footer from "@/components/Footer"
import ProfileCover from "@/content/Management/Users/details/ProfileCover"
import { Box, Container, Grid } from "@mui/material"
import { useSession, useSupabaseClient, useUser } from "@supabase/auth-helpers-react"
import { Auth, ThemeSupa,ThemeMinimal} from "@supabase/auth-ui-react"
import Head from "next/head"
import { NextRouter, useRouter } from "next/router"
import { useEffect } from "react"

const Login = () => {
    const router: NextRouter = useRouter()
    const user = useUser();
    const session = useSession()
    const supabase = useSupabaseClient()

    useEffect(() => {
        if (user) {
            router.push('/dashboards/tasks');
        }
    }, [user]);
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div>
                <h1>HELLO LOGIN</h1>
            </div>
            <Container sx={{ mt: 3 }} maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    <Grid item xs={12} md={4}>
                        <Box >
                            {!session ? (
                                <Auth
                                supabaseClient={supabase}
                                providers={['github']}
                                
                                magicLink={true}
                                appearance={{
                                    theme: ThemeSupa,
                                    variables: {
                                        default: {
                                            colors: {
                                                brand: '#404040',
                                                brandAccent: '#52525b'
                                            }
                                        }
                                    }
                                }}
                                theme="dark"
                            />

                            ) :
                                (
                                    <p>LOADING ...</p>

                                )}
                        </Box>

                    </Grid>

                </Grid>
            </Container>

            <div className="container" style={{ padding: '50px 0 100px 0' }}>

            </div>
            <Footer></Footer>
        </>
    )

}

export default Login