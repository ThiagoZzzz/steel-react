import React from 'react'
import {
    AboutSection,
    AboutEyebrow,
    ValueGrid,
    Card,
    CardContent,
    CardTitle,
    CardDescription,
    Divider,
} from './style'

const AboutUs = () => {
    return (
        <AboutSection>
            <AboutEyebrow>EST. 2010 — Our Story</AboutEyebrow>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 300, color: 'var(--text)', lineHeight: 1.0, marginBottom: '1.5rem' }}>
                Crafted with<br />Purpose.
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', color: 'var(--text-dim)', lineHeight: 1.8, maxWidth: 520, letterSpacing: '0.02em', marginBottom: '1rem' }}>
                At STEEL, we believe a watch is more than a timepiece — it is a reflection of
                who you are. Every dial, every case, every strap is designed with intention.
            </p>

            <Divider />

            <ValueGrid>
                <Card>
                    <CardContent>
                        <CardTitle>Our Mission</CardTitle>
                        <CardDescription>
                            Creating pieces that fuse precision engineering with timeless design. We are dedicated
                            to designing watches that do not force you to choose between elegance and comfort,
                            offering the perfect accessory for those who seek to project their attitude and
                            maximise their potential every day.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Our Vision</CardTitle>
                        <CardDescription>
                            Becoming the essential ally of contemporary style. We aspire to redefine the experience
                            of wearing a watch, transforming it from a simple accessory into a statement of identity
                            that inspires confidence and distinction in any setting.
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <CardTitle>Our Craft</CardTitle>
                        <CardDescription>
                            Every STEEL timepiece goes through 200 hours of assembly and quality control. We source
                            only the finest Swiss movements and surgical-grade steel to ensure a lifetime of
                            flawless performance on your wrist.
                        </CardDescription>
                    </CardContent>
                </Card>
            </ValueGrid>
        </AboutSection>
    )
}

export default AboutUs
