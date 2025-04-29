export const getBanners = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_URL_API}pages?slug=home-site`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Falha ao buscar os banner, por favor tente novamente.')
  }

  const bannerMobile = data[0].mobile_banner_data
  const bannerDesktop = data[0].desktop_banner_data

  const banners = {
    mobile: bannerMobile,
    desktop: bannerDesktop
  }

  console.log(banners.mobile)

  return banners
}
