# Production Deployment Checklist - www.umzeautohaus.com.au

## ✅ Pre-Deployment (Completed)

- [x] Updated all URLs to `https://www.umzeautohaus.com.au`
- [x] Google Analytics 4 configured (G-80NB26LT0V)
- [x] XML Sitemap configured
- [x] Robots.txt configured
- [x] Schema.org markup added
- [x] Meta tags optimized
- [x] Build passing
- [x] Code pushed to GitHub

## 🚀 Vercel Deployment Steps

### 1. Set Environment Variables in Vercel
Go to your Vercel project settings and add:

```
NEXT_PUBLIC_BASE_URL=https://www.umzeautohaus.com.au
MONGODB_URI=mongodb+srv://wlopersinc_db_user:NzM2SvTJPblGzx7D@umza.lccfq3q.mongodb.net/umze-autohaus
JWT_SECRET=440f867742bffec79ffe3aa4a02faf20
CLOUDINARY_CLOUD_NAME=dqo22au5d
CLOUDINARY_API_KEY=153999362846529
CLOUDINARY_API_SECRET=B-B0mZBWMizSzsNh7hTZbNBE7Io
```

### 2. Deploy to Vercel
- Push to main branch (already done ✅)
- Vercel will auto-deploy
- Or manually trigger deployment in Vercel dashboard

### 3. Verify Domain Configuration
- Ensure `www.umzeautohaus.com.au` points to Vercel
- Check DNS settings
- Verify HTTPS certificate is active

## 📊 Post-Deployment Verification (Do These Immediately)

### 1. Test Core URLs
- [ ] Homepage: https://www.umzeautohaus.com.au/
- [ ] Sitemap: https://www.umzeautohaus.com.au/sitemap.xml
- [ ] Robots: https://www.umzeautohaus.com.au/robots.txt
- [ ] Stock: https://www.umzeautohaus.com.au/vehicles-for-import
- [ ] Blog: https://www.umzeautohaus.com.au/blog

### 2. Test Google Analytics
- [ ] Visit your site
- [ ] Check GA4 Real-Time report
- [ ] Verify events are tracking

### 3. Test Schema Markup
Use [Google Rich Results Test](https://search.google.com/test/rich-results):
- [ ] Test homepage: https://www.umzeautohaus.com.au/
- [ ] Test a vehicle page
- [ ] Test a blog post

### 4. Run Lighthouse Audit
- [ ] Open Chrome DevTools
- [ ] Run Lighthouse audit
- [ ] Target scores:
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

### 5. Test Core Web Vitals
Use [PageSpeed Insights](https://pagespeed.web.dev/):
- [ ] Test: https://www.umzeautohaus.com.au/
- [ ] Verify all metrics in "Good" range

### 6. Mobile-Friendly Test
Use [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):
- [ ] Test: https://www.umzeautohaus.com.au/
- [ ] Should pass all checks

## 🔍 Google Search Console Setup

### 1. Add Property
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add property: `https://www.umzeautohaus.com.au`
- [ ] Verify ownership (use meta tag method)

### 2. Submit Sitemap
- [ ] In Search Console, go to "Sitemaps"
- [ ] Submit: `https://www.umzeautohaus.com.au/sitemap.xml`
- [ ] Wait for processing (can take 24-48 hours)

### 3. Request Indexing
- [ ] Use URL Inspection tool
- [ ] Test key pages
- [ ] Request indexing for important pages

## 📈 Week 1 Monitoring

### Daily Checks
- [ ] Check GA4 for traffic
- [ ] Monitor Search Console for errors
- [ ] Check for broken links

### End of Week
- [ ] Review indexing status
- [ ] Check keyword rankings
- [ ] Analyze traffic sources
- [ ] Review Core Web Vitals

## 🎯 Success Metrics

### Immediate (Day 1)
- [ ] Site loads correctly
- [ ] GA4 tracking works
- [ ] No console errors
- [ ] All pages accessible

### Week 1
- [ ] Sitemap processed
- [ ] Pages being indexed
- [ ] No critical errors in Search Console

### Month 1
- [ ] 50+ pages indexed
- [ ] Organic traffic starting
- [ ] Lighthouse SEO: 100
- [ ] Core Web Vitals: All "Good"

## 📞 Quick Links

- **Live Site:** https://www.umzeautohaus.com.au/
- **Sitemap:** https://www.umzeautohaus.com.au/sitemap.xml
- **Robots:** https://www.umzeautohaus.com.au/robots.txt
- **GA4:** https://analytics.google.com (G-80NB26LT0V)
- **Search Console:** https://search.google.com/search-console
- **PageSpeed:** https://pagespeed.web.dev/

## 🆘 Troubleshooting

### Sitemap Not Loading
- Check Vercel deployment logs
- Verify `/api/vehicles` endpoint works
- Check environment variables are set

### GA4 Not Tracking
- Check browser console for errors
- Verify tracking ID: G-80NB26LT0V
- Test in incognito mode
- Check ad blockers

### Pages Not Indexing
- Check robots.txt allows crawling
- Submit sitemap to Search Console
- Request indexing manually
- Check for noindex tags

---

**Deployment Date:** January 18, 2026  
**Domain:** www.umzeautohaus.com.au  
**Status:** Ready for production deployment 🚀
