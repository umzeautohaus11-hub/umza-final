# SEO Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Environment Variables (Vercel)
Set these in your Vercel project settings:

```bash
NEXT_PUBLIC_BASE_URL=https://your-domain.com
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=dqo22au5d
CLOUDINARY_API_KEY=153999362846529
CLOUDINARY_API_SECRET=B-B0mZBWMizSzsNh7hTZbNBE7Io
```

### 2. Google Search Console Setup
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://your-domain.com)
3. Verify ownership using one of these methods:
   - HTML file upload
   - Meta tag (add to `src/app/layout.tsx` in the verification field)
   - Google Analytics
4. Submit your sitemap: `https://your-domain.com/sitemap.xml`

### 3. Google Analytics 4 Verification
1. Go to [Google Analytics](https://analytics.google.com)
2. Check that tracking ID `G-80NB26LT0V` is receiving data
3. Set up conversion goals (form submissions, enquiries)

### 4. Bing Webmaster Tools (Optional but Recommended)
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add and verify your site
3. Submit sitemap: `https://your-domain.com/sitemap.xml`

## 📊 Post-Deployment Verification

### Immediate Checks (Day 1)

#### 1. Verify Sitemap
- Visit: `https://your-domain.com/sitemap.xml`
- Should show XML with all pages listed
- Check that vehicle pages are included

#### 2. Verify Robots.txt
- Visit: `https://your-domain.com/robots.txt`
- Should show:
  ```
  User-agent: *
  Allow: /
  Disallow: /admin/
  Disallow: /api/
  
  Sitemap: https://your-domain.com/sitemap.xml
  ```

#### 3. Test Google Analytics
- Visit your site
- Check Real-Time reports in GA4
- Verify events are being tracked

#### 4. Test Schema Markup
Use [Google Rich Results Test](https://search.google.com/test/rich-results):
- Test homepage for Organization schema
- Test a vehicle page for Product schema
- Test a blog post for Article schema

#### 5. Run Lighthouse Audit
In Chrome DevTools:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for:
   - Performance (target: 90+)
   - Accessibility (target: 95+)
   - Best Practices (target: 95+)
   - SEO (target: 100)

#### 6. Check Core Web Vitals
Use [PageSpeed Insights](https://pagespeed.web.dev/):
- Test homepage
- Test a vehicle detail page
- Verify all metrics are in "Good" range:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

#### 7. Mobile-Friendly Test
Use [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):
- Test homepage
- Test vehicle listing page
- Should pass all checks

### Week 1 Checks

#### 1. Google Search Console
- Check "Coverage" report for indexing status
- Verify no errors
- Check "Enhancements" for schema markup

#### 2. Monitor Analytics
- Daily visitors
- Traffic sources
- Top pages
- Bounce rate
- Average session duration

#### 3. Check Rankings
Use tools like:
- Google Search Console (Search Results report)
- Ahrefs
- SEMrush
- Moz

Target keywords to track:
- Japanese car imports Melbourne
- JDM imports Australia
- Import cars from Japan
- Japanese vehicle specialists Melbourne

## 🔧 Troubleshooting

### Sitemap Not Updating
- Sitemap revalidates every hour
- Force update by redeploying
- Check that `/api/vehicles` is accessible

### Schema Markup Not Showing
- Use Rich Results Test to debug
- Check for JSON-LD syntax errors
- Verify all required fields are present

### GA4 Not Tracking
- Check browser console for errors
- Verify tracking ID is correct
- Check ad blockers aren't interfering
- Test in incognito mode

### Poor Core Web Vitals
- Check image sizes (should be optimized)
- Review JavaScript bundle size
- Enable caching headers
- Consider using CDN

## 📈 Ongoing Optimization

### Weekly Tasks
- Monitor Google Search Console for errors
- Check GA4 for traffic patterns
- Review and respond to any indexing issues

### Monthly Tasks
- Review keyword rankings
- Analyze top-performing pages
- Update meta descriptions based on CTR
- Add new blog content
- Build backlinks

### Quarterly Tasks
- Comprehensive SEO audit
- Update schema markup if needed
- Review and optimize Core Web Vitals
- Competitive analysis
- Content gap analysis

## 🎯 Success Metrics

### Month 1 Targets
- [ ] All pages indexed in Google
- [ ] Sitemap submitted and processed
- [ ] GA4 tracking verified
- [ ] Schema markup validated
- [ ] Lighthouse SEO score: 100
- [ ] Core Web Vitals: All "Good"

### Month 3 Targets
- [ ] Organic traffic: 100+ sessions/month
- [ ] Ranking for primary keywords (top 20)
- [ ] 10+ backlinks
- [ ] 5+ new blog posts
- [ ] Conversion rate: 2%+

### Month 6 Targets
- [ ] Organic traffic: 500+ sessions/month
- [ ] Ranking for primary keywords (top 10)
- [ ] 25+ backlinks
- [ ] 15+ blog posts
- [ ] Conversion rate: 3%+

## 📞 Support Resources

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Documentation
- [Next.js SEO](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Web.dev](https://web.dev/)

### Monitoring
- Set up Google Search Console email alerts
- Set up GA4 custom alerts for traffic drops
- Monitor Core Web Vitals in Search Console

---

**Last Updated:** January 18, 2026  
**Status:** Ready for deployment  
**Next Review:** Post-deployment + 1 week
