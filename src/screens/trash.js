<View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5, borderRadius: 2, padding: 10 }} >
                      <Card style={{ borderRadius: 8 }}>
                        <CardItem header style={{ flexDirection: 'row', backgroundColor: '#fff', width: '100%', justifyContent: 'space-between', borderBottomColor: '#f1f1f1', borderBottomWidth: 1,borderRadius: 80 }}>
                          <View style={{paddingTop:10 }}>
                              <RegularText text={`${'Wallet Balance'}`} textColor='grey'style={{ fontWeight: 'bold', flexWrap: 'wrap',color:'grey' }} />
                          </View>

                            <View style = {{ width : wp('10%'),height: wp('10%'),backgroundColor : '#E091C9' ,borderRadius : hp('1%'), margin : 8,flexDirection :'row',justifyContent :'center',alignItems : 'center'}}>
                           <SvgCss xml={WALLET} width={15} height={15} />
                             </View>

                            <View style={{
                            flexDirection: 'column',
                            height: 25, paddingRight: 10, paddingLeft: 10, paddingTop: 5,paddingBottom:30}}>
                            <SmallText text={'MUR 110.00'} textColor='red' />
                            <SmallText text={'Add Money'} textColor='blue' />
                            </View>

                        </CardItem>
                        <View style = {{flexDirection : 'row',paddingLeft:24,paddingRight:24}}>
                        {info.tecnologies.map(
                          (data, index) => {
                              return (
                                <View>
                                  <View style = {{width : wp('14%'),height: wp('14%'),backgroundColor : 'rgb(163, 153, 233)',borderRadius : hp('2%'), margin : 10,flexDirection :'row',justifyContent :'center',alignItems : 'center'}}>
                                <SvgCss xml={PAY_BILL} width={15} height={15} />
                                  </View>
                                  <View style={{paddingLeft:15,paddingBottom:15}}>
                                  <SmallText text={'Pay Bill'} textColor='grey' />

                                  </View>
                                </View>
                              )
                          }
                      )}
                      </View>
                      </Card>
                    </View>